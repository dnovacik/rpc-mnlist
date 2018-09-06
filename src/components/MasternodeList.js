import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoaderContainer from './LoaderContainer';
import GetMasternodeList from './../actions/GetMasternodeList';
import { Masternode } from './Masternode';

class MasternodeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elementsPerPage: props.masternodesOnPage,
            currentPage: 1,
            mainColor: props.mainColor
        }
    }

    componentDidMount() {
        this.props.GetMasternodeList();
        this.timer = setInterval(() => this.props.GetMasternodeList(), this.props.refreshTime * 1000);
    }

    componentWillUnmount() {
        this.timer = null;
    }
    
    handleClick = (event) => {
        event.preventDefault();
        let addition = event.target.id === 'previous' ? -1 : 1;

        this.setState({
            currentPage: this.state.currentPage + addition
        });
    }

    renderLoader() {
        return (
            <LoaderContainer mainColor={this.state.mainColor} />
        );
    }

    renderPageArrows(mnCount) {
        let hrefStyle = {
            color: this.state.mainColor,
            fontWeight: 'bold',
            pointerEvents: 'all'
        }

        let previousDisabled = this.state.currentPage === 1;
        let startNumber = ((this.state.currentPage - 1) * this.state.elementsPerPage) + 1;
        let endNumber = this.state.currentPage * this.state.elementsPerPage;

        return (
            <tr>
                <td colSpan='2' className='left'>
                    <a id='previous' href={null} onClick={this.handleClick}
                        style={previousDisabled ? {pointerEvents: 'none'} : {hrefStyle}}>&lt; previous</a>
                </td>
                <td colSpan='1'>
                    <span>{startNumber} - {endNumber} of {mnCount}</span>
                </td>
                <td colSpan='2' className='right'>
                    <a id='next' href={null} onClick={this.handleClick} style={hrefStyle}>next &gt;</a>
                </td>
            </tr>
        );
    }

    renderTableHeader() {
        return (
            <tr className='table-header'>
                <th>Status</th>
                <th>Public Key</th>
                <th>Last Seen (ago)</th>
                <th>Last Paid (ago)</th>
                <th>Active Duration</th>
            </tr>
        );
    }

    renderMasternodeList() {
        if (!this.props.masternodes.hasError) {
            const indexOfLast = this.state.currentPage * this.state.elementsPerPage;
            const indexOfFirst = indexOfLast - this.state.elementsPerPage;
            const currentlyVisible = this.props.masternodes.data.slice(indexOfFirst, indexOfLast);
    
            const renderMasternodes = currentlyVisible.map((masternode, index) => {
                return (
                    <Masternode key={index} status={masternode.status} pubkey={masternode.addr} lastSeen={masternode.lastseen} lastPaid={masternode.lastpaid} activeSince={masternode.activetime} />
                )
            });
    
            return (
                <div className='container pb-5 pt-5'>
                    <div>

                    </div>
                    <table className='masternodes-table'>
                        <thead>
                            {this.renderTableHeader()}
                        </thead>
                        <tbody>
                            {renderMasternodes}
                            {this.renderPageArrows(this.props.masternodes.data.length)}
                        </tbody>
                    </table>
    
                </div>
            );
        } else {
            return (
                <div>An error occurred</div>
            );
        }
        
    }

    render() {
        return (
           <div>
               {(this.props.masternodes.isFetching)
                ? this.renderLoader()
                : this.renderMasternodeList()}
           </div>
        );   
       }
}

function mapStateToProps(state) {
    return {
        masternodes: state.masternodes
    }
}

export default connect(mapStateToProps, { GetMasternodeList })(MasternodeList)