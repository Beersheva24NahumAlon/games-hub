import React, { useState } from 'react';
import orderList from "../../config/orderList.json";
import { Box, Button, Menu, Portal } from '@chakra-ui/react';
import ComponentMotion from './ComponentMotion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { easeOut } from 'framer-motion';
import useGameQuery from '../state-management/store';


const duration = 0.5;
const OrderSelector: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setOrder = useGameQuery(s => s.setOrder);
  const selectedOrder = useGameQuery(s => s.gameQuery.orderObj);
  
  return (
    <Box>
      <Menu.Root onExitComplete={() => setIsOpen(false)}>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
            Order by {selectedOrder ? selectedOrder.name : "Default"}
            {!isOpen ?
              <ComponentMotion duration={duration} timing={easeOut}>
                <FaAngleDown />
              </ComponentMotion>
              : <FaAngleUp />}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <ComponentMotion duration={duration} timing={easeOut}>
              <Menu.Content>
                <Menu.Item
                  key="order"
                  onClick={() => setOrder(null)}
                  value=""
                >
                  Default
                </Menu.Item>
                {
                  orderList.map(order =>
                    <Menu.Item value={order.value} key={order.value} onClick={() => { setOrder(order); setIsOpen(false); }}>{order.name} </Menu.Item>)
                }
              </Menu.Content>
            </ComponentMotion>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  )
}

export default OrderSelector