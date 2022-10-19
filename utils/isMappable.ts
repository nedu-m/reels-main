//this function check if a return value is mappable
export function isMappable(prop: any): boolean {
  return prop !== "children" && prop !== "key" && prop !== "ref";
}

//convert a return value to an array of mappable values
export default function toMappableArray(prop: any): any[] {
  return isMappable(prop) ? [prop] : prop;
}
