import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
  const {
    data: course = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    // const {data : course = [], isLoading: loading, refetch} = useQ({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/course");
      return res.json();
    },
  });
  return [course, loading, refetch];
};

export default useCourse;