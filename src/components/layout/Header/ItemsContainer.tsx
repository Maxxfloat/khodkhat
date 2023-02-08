function ItemsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full font-bold bg-white shadow rounded-xl">
      {children}
    </div>
  );
}

export default ItemsContainer;
