export default class TableModel {
    constructor() {
    }

    DataQueryUrl: String = ""
    multiple: Boolean = true
    CloumnList: Array<Column> = []
    stripe: Boolean = true
    size: TableSize = TableSize.small

}

export enum TableSize {
    small = "small",
    medium = "medium",
    mini = "mini"
}

export interface Column {

    prop: String | undefined
    label: String | undefined
    width?: number | 150

}