// import type { PageLoad } from './$types';
// export const prerender = true;

// export const load: PageLoad = async ({ fetch }) => {
// 	const res = await fetch('/my-server-route.json');
// 	return await res.json();
// };



// The load function is an asynchronous function that returns an empty object {} 
export const load = async () =>{
    return{}
  }
  

  export const actions ={
  default:async (event) => {
    const formData = Object.fromEntries(await event.request.formData())
    console.log(formData);
    
  }
  
}
