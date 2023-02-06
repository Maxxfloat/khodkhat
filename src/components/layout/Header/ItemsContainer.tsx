function ItemsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 rounded-xl flex justify-center items-center h-full bg-white shadow font-bold">
      {children}
    </div>
  );
}

export default ItemsContainer;
