import React, { Component }  from "react";
import { connect } from "react-redux";
import constants from '../constants/constants';
import { updateAddressOrder } from '../Actions/updateAddressOrder';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class AddressList extends Component {  
    constructor(props) {
        super(props);
        this.state = { editAddress: "", editAddressId: null };      


        this.onDragEnd = this.onDragEnd.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    onDragEnd(result) {

        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            return result;
        };

        const addresses = reorder(
            this.props.pointList,
            result.source.index,
            result.destination.index
        );

        this.props.updateAddressOrder(addresses);
    }


    removeItem(index) {
        var addresses = this.props.pointList.filter((address, i) => {
            return i != index;
        })
        this.props.updateAddressOrder(addresses);
    }

    stopEditing() {
        this.setState({ editAddress: "", editAddressId: null });
    }
   

    editItem(index) {      
        this.setState({ editAddressId: index})
    }

    clearAll() {
        this.props.updateAddressOrder([]);
    }

    handleItemChange(e) {
        this.setState({ editAddress: e.target.value })
    }

    handleItemKeyDown(e) {
        if (e.key === 'Enter') {
            var addresses = this.props.pointList.map((address) => {
                if (address.id == this.state.editAddressId) address.address = this.state.editAddress;
                return address;
            })
            this.stopEditing();
            this.props.updateAddressOrder(addresses);
          
        }       
    }


    render() {
        const listItems = this.props.pointList.map((item, index) => {
            return <div>{item.address}</div>
            })


        return (
            <div className="addressListContainer">
                <DragDropContext onDragEnd={this.onDragEnd}> 
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} className="addressList">
                                <div className="clearAll" onClick={() => { this.clearAll() }}>Clear all</div>
                                {this.props.pointList.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={this.state.editAddressId == null ? false:true}>
                                        {(provided, snapshot) => (
                                            <div
                                                className={item.id === this.state.editAddressId ? "addressItemFocused" : "addressItem" }
                                                ref={provided.innerRef}                                            
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}                                           
                                            >
                                                {item.id === this.state.editAddressId
                                                    ? 
                                                    <div>
                                                        <input className="addressListInput" value={this.state.editAddress} onChange={(e) => { this.handleItemChange(e) }} onKeyDown={(e) => { this.handleItemKeyDown(e) }} />
                                                        <div className="close" onClick={() => { this.stopEditing() }}></div>
                                                    </div>                                                   
                                                    :
                                                    <div>
                                                        {item.address}
                                                        <div className="delete" onClick={() => { this.removeItem(index) }}></div>
                                                        <div className="edit" onClick={() => { this.editItem(item.id) }}></div>
                                                    </div>}
                                           
                                            </div>
                                            
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
             </div>
        )
    }
}


const mapStateToProps = ({ map }) => {
    return {
        map: map.map,
        pointList: map.pointList,
        multiRoute: map.multiRoute,
        pointAddressToEdit: map.pointAddressToEdit
    };
};
 


export default connect(mapStateToProps, { updateAddressOrder})(AddressList);