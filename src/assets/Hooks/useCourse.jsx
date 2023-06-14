import { useQuery } from "@tanstack/react-query";


const useCourse = () => {
  const {data: course = [],isLoading: loading,refetch,  } = useQuery({    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch("https://captured-moment-server-abidhasanpranto52.vercel.app/course");
      return res.json();
    },
  });
  return [course, loading, refetch];
};

export default useCourse;
