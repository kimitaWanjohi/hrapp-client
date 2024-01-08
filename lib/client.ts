import {GRAPHQL_SERVER} from '@/const';
import {getToken} from './authState';

export default async function GraphqlClient(query: string, variables: any, cache: any = null) {
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