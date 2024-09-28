import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as IImage, stringToPath } from "sanity";
export const GetProduct = async ()=>{
 const res = client.fetch(`*[_type == "product"]{
  price,
 description,
    image
 }`)
 return res
}
interface Iproduct{
  price:number,
  description:string,
  image:IImage
}
export default async function Home() {
  const data:Iproduct[] = await GetProduct()
  console.log(data)
  return (
  <div>
        {data.map((item,i)=>(
          <div>
                    <h1 key={i}>{item.price}</h1>  
                    <Image src={urlFor(item.image).url()} alt={"hello"}></Image>
          </div>
        ))}
      
  </div>
  );
}
