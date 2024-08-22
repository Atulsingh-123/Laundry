import React, { useState } from "react";
import { DndProvider, useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Order = {
  id: string;
  name: string;
  order: string;
};

type OrdersState = {
  overview: Order[];
  processing: Order[];
  readyToDeliver: Order[];
};

type SectionProps = {
  id: keyof OrdersState;
  title: string;
  orders: Order[];
  onMove: (id: string, toSection: keyof OrdersState) => void; 
};

type CardProps = {
  order: Order;
  index: number;
  moveCard: (id: string, toSection: keyof OrdersState) => void;
};

const ItemType = "CARD";

const Card: React.FC<CardProps> = ({ order }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id: order.id, type: ItemType },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-white p-4 border border-gray-200 rounded-lg shadow-md flex justify-between items-center ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <span>{order.name}</span>
      <span className="text-gray-500">{order.order}</span>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ id, title, orders, onMove }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item: { id: string }) => {
      onMove(item.id, id);
    },
  });

  return (
    <div
      ref={drop}
      className="bg-white p-4 rounded-lg shadow-lg relative"
    >
      <div className={`absolute inset-x-0 top-0 h-8 ${getColor(id)} flex items-center pl-3 rounded-t`}>
        <h2 className="text-md font-semibold text-white">{title}</h2>
      </div>
      <div className="mt-10 space-y-4">
        {orders.map((order, index) => (
          <Card key={order.id} order={order} index={index} moveCard={onMove} />
        ))}
      </div>
    </div>
  );
};

const getColor = (sectionId: keyof OrdersState) => { 
  switch (sectionId) {
    case "overview":
      return "bg-gray-500";
    case "processing":
      return "bg-yellow-500";
    case "readyToDeliver":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

const OrderStatus: React.FC = () => {
  const [orders, setOrders] = useState<OrdersState>({
    overview: [
      { id: "1", name: "Jeanette Russell", order: "#ORD-0023" },
      { id: "2", name: "Ken Brown", order: "#ORD-0022" },
      { id: "3", name: "Kristin Murray", order: "#ORD-0020" },
    ],
    processing: [{ id: "4", name: "Kristin Murray", order: "#ORD-0025" }],
    readyToDeliver: [
      { id: "5", name: "Lynn Hicks", order: "#ORD-0024" },
      { id: "6", name: "Owen Ruiz", order: "#ORD-0021" },
      { id: "7", name: "Catherine Wheeler", order: "#ORD-0019" },
    ],
  });

  const moveCard = (id: string, toSection: keyof OrdersState) => { 
    const fromSection = Object.keys(orders).find((section) =>
      orders[section as keyof OrdersState].some((order) => order.id === id)
    ) as keyof OrdersState;

    if (!fromSection) return;

    const movedOrder = orders[fromSection].find((order) => order.id === id);

    if (!movedOrder) return;

    setOrders((prevOrders) => ({
      ...prevOrders,
      [fromSection]: prevOrders[fromSection].filter((order) => order.id !== id),
      [toSection]: [...prevOrders[toSection], movedOrder],
    }));
    toast.success("Order Changed Successfully");
  };

  return (
    <div className="p-2">
      <h1 className="text-3xl font-semibold">Order Status</h1>
      <div className="mt-4 text-sm text-gray-500">
        <span>Dashboard / Orders /</span> <span className="font-semibold text-gray-700">Order Status</span>
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 border border-gray-300 shadow-xl p-4 rounded">
          <Section
            id="overview"
            title="Overview"
            orders={orders.overview}
            onMove={moveCard}
          />
          <Section
            id="processing"
            title="Processing"
            orders={orders.processing}
            onMove={moveCard}
          />
          <Section
            id="readyToDeliver"
            title="Ready to Deliver"
            orders={orders.readyToDeliver}
            onMove={moveCard}
          />
        </div>
      </DndProvider>
      <ToastContainer />
    </div>
  );
};

export default OrderStatus;
