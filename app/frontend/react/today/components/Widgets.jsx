import React from "react"

export default class Widgets extends React.Component {
    render() {
        let {widgets} = this.props
        let widgetNodes = []
        widgets.forEach((item, index) => {
            let node = (
                <div key={item.hash}>{item.name}</div>
            )
            widgetNodes.push(node)
        })

        return (
            <div>{widgetNodes}</div>
        )
    }
}
