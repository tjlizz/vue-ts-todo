export default interface ToDo {
    name: String;
    status: "todo" | "untodo" | "delete";
    index:number;
  }