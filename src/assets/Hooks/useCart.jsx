import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["carts", user?.email],
        enabled: !! user?.email,
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
          return res.json();
        },
      });
      return [cart,  refetch];
};

export default useCart;