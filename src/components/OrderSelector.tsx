import React, { useState } from 'react';
import orderList from "../../config/orderList.json";
import { Box, Button, Menu, Portal } from '@chakra-ui/react';
import ComponentMotion from './ComponentMotion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { easeOut } from 'framer-motion';
import Order from '../model/Order';

interface Props {
    onSelectOrder: (order: Order | null) => void;
    selectedOrder: Order | null;
}

const duration = 0.5;
const OrderSelector: React.FC<Props> = ({onSelectOrder, selectedOrder}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <Box>
      <Menu.Root onExitComplete={() => setIsOpen(false)}>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {selectedOrder ? selectedOrder.name : "Order"}
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
                  onClick={() => {
                    onSelectOrder(null);
                  
                  }}
                  value=""
                >
                  Order
                </Menu.Item>
                {
                  orderList.map(order =>
                    <Menu.Item value={order.value} key={order.value} onClick={() => { onSelectOrder(order); setIsOpen(false); }}>{order.name} </Menu.Item>)
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