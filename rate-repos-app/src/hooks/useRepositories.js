import { useState, useEffect } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.0.44:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;

/*
por alguna pua razon esta mierda no funciona

import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, error, loading] = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return { repositories, loading };
};

export default useRepositories;
*/