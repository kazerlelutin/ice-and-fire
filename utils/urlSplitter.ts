//for extract id 
export default function urlSplitter(url:string):string {
  const splitUrl = url.split('/')
  return splitUrl.at(-1)
}