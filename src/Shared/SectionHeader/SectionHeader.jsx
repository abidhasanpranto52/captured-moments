const SectionHeader = ({heading}) => {
    return (
      <div className="mx-auto text-center md:w-4/12">
        <h3 className="text-3xl text-amber-950 rounded-full capitalize border-y-4 border-t-lime-400 border-b-red-400 py-4">---- {heading} ----</h3>
      </div>
    );
  };
  
  export default SectionHeader;