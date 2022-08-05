
export const getValue = (fieldValue: string, object: any) => {
    var fields = fieldValue.split(".");
    var value = object

    fields.map((field) => {
        if (value) {
            value = value[field]
        }
    })

    return value
}

export const showDescription = (properties: string[], object: any) => {
    if (!properties) return

    var description: string = ""

    properties.map((property: any) => {
        //description += object[property] + ' - '
        description += getValue(property, object) + ' - '
    })

    description = description.substring(0, (description.length-3))

    return description
}

// export const showDescrition = (properties: object[], object: any) => {
//     debugger
//     if (!properties) return

//     var description: string = ""

//     properties.map((property: any) => {
//         description += object[property.fieldName] + ' - '
//     })

//     description = description.substring(0, (description.length-3))

//     return description
// }