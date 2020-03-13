/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { peerListType } from '../types';

/* istanbul ignore next */
const Peers = ({ peerList }) => {
	const columnHeaders = [
		{
			Header: '节点名称',
			accessor: 'server_hostname',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['server_hostname'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: '请求Url',
			accessor: 'requests',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['requests'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: '节点类型',
			accessor: 'peer_type',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['peer_type'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'MSPID',
			accessor: 'mspid',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['mspid'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: '账本高度',
			columns: [
				{
					Header: '高32位',
					accessor: 'ledger_height_high',
					filterMethod: (filter, rows) =>
						matchSorter(
							rows,
							filter.value,
							{ keys: ['ledger_height_high'] },
							{ threshold: matchSorter.rankings.SIMPLEMATCH }
						),
					filterAll: true
				},
				{
					Header: '低32位',
					accessor: 'ledger_height_low',
					filterMethod: (filter, rows) =>
						matchSorter(
							rows,
							filter.value,
							{ keys: ['ledger_height_low'] },
							{ threshold: matchSorter.rankings.SIMPLEMATCH }
						),
					filterAll: true
				},
				{
					Header: '无符号',
					id: 'ledger_height_unsigned',
					accessor: d => d.ledger_height_unsigned.toString(),
					filterMethod: (filter, rows) =>
						matchSorter(
							rows,
							filter.value,
							{ keys: ['ledger_height_unsigned'] },
							{ threshold: matchSorter.rankings.SIMPLEMATCH }
						),
					filterAll: true
				}
			]
		}
	];

	return (
		<div>
			<ReactTable
				data={peerList}
				columns={columnHeaders}
				defaultPageSize={5}
				filterable
				minRows={0}
				showPagination={!(peerList.length < 5)}
			/>
		</div>
	);
};

Peers.propTypes = {
	peerList: peerListType.isRequired
};

export default Peers;
