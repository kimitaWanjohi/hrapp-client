import {GRAPHQL_SERVER} from '@/const';

const getToken = () => {
  const token = localStorage.getItem('token');
  if (token === null) {
    return '';
  }
  return token;
}

export default async function GraphqlClient(query: string, variables: any = null, cache: any = null) {
  try {
    const res = await fetch(GRAPHQL_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `JWT ${getToken()}`,
      },
      next: cache,
      cache: cache === null? 'no-cache' : 'default',
      body: JSON.stringify({
        query: query,
        variables: variables? variables : {}
      })
    });
    return await res.json();
  }
  catch(err) {
    console.log(err);
  }
}