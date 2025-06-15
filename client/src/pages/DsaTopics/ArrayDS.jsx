


const ArrayDS = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Array Data Structure</h1>
      
      <h2 className="text-2xl font-semibold mb-2">What is an Array?</h2>
      <p className="mb-4">
        An array is a collection of items stored at contiguous memory locations, allowing efficient index-based access.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Direct access using index (O(1) time).</li>
        <li>Efficient use of memory.</li>
        <li>Used to implement other data structures like stacks and queues.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disadvantages</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Fixed size – can’t grow dynamically.</li>
        <li>Insertion/deletion is expensive if not at the end.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Applications</h2>
      <ul className="list-disc pl-6">
        <li>Used in sorting algorithms.</li>
        <li>Used in matrices and tables.</li>
        <li>Used in dynamic programming for storing results.</li>
      </ul>
    </div>

   

  );
};

export default ArrayDS;
