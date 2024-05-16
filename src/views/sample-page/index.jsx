/* eslint-disable prettier/prettier */
// material-ui
import { Grid, TextField, Button, MenuItem, FormControl } from '@mui/material';
// import { useState } from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import EditAbleDataGrid from 'components/EditAbleDataGrid';

import { Grid, TextField, Button, Select, MenuItem, FormControl } from '@mui/material';


// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Edit from '@mui/icons-material/Edit';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
	const initialRows = [
		{
			id: 1,
			name: 'jhon',
			age: 25,
			joinDate: new Date('2024-05-25'),
			role: 'developer'
		},
		{
			id: 2,
			name: 'jhon',
			age: 25,
			joinDate: new Date('2024-05-25'),
			role: 'developer'
		},
		{
			id: 3,
			name: 'jhon',
			age: 25,
			joinDate: new Date('2024-05-25'),
			role: 'developer'
		},
		{
			id: 4,
			name: 'jhon',
			age: 25,
			joinDate: new Date('2024-05-25'),
			role: 'developer'
		},
		{
			id: 5,
			name: 'jhon',
			age: 25,
			joinDate: new Date('2024-05-25'),
			role: 'developer'
		}
	];

	const columns = [
		{ field: 'name', headerName: 'Name', editable: true, flex: 2 },
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			flex: 1,
			align: 'left',
			headerAlign: 'left',
			editable: true
		},
		{
			field: 'joinDate',
			headerName: 'Join date',
			type: 'date',
			flex: 1,
			editable: true
		},
		{
			field: 'role',
			headerName: 'Department',
			flex: 1,
			editable: true,
			type: 'singleSelect',
			valueOptions: ['Market', 'Finance', 'Development']
		}
	];

	// const handleSave = () => {
	// };
	const volume = [
		{
			value: 'Vol',
			label: 'Volume 1'
		}
	];
	const enabled = [
		{
			value: 'Yes',
			label: 'Y'
		},
		{ value: 'No', label: 'N' }
	];
	return (
		<MainCard>
			<FormControl>
				<Grid container spacing={2} width="Inherit">
					<Grid item xs={12}>
						<h2>Planning Screen</h2>
					</Grid>
					<Grid item xs={3}>
						<TextField label="Collection Order #" fullWidth size="small" />
					</Grid>
					<Grid item xs={9}>
						<TextField label="Collection Name" fullWidth size="small" />
					</Grid>
					<Grid item xs={3}>
						<TextField
							fullWidth
							id="outlined-select-currency"
							select
							label="Volume"
							defaultValue="Vol"
							helperText="Please select volume"
							size="small"
						>
							{volume.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={3}>
						<TextField size="small" type="date" label="Planning Date" name="planningDate" fullWidth focused />
					</Grid>
					<Grid item xs={3}>
						<TextField size="small" type="date" label="Launch Date" name="launchDate" fullWidth focused />
					</Grid>
					<Grid item xs={3}>
						<TextField
							fullWidth
							id="outlined-select-currency"
							select
							label="Enabled"
							defaultValue="EUR"
							helperText="Please select"
							size="small"
						>
							{enabled.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} textAlign="right">
						<Button variant="contained" size="small">
							Save
						</Button>
					</Grid>
					<Grid item xs={12} paddingTop={1}>
						<EditAbleDataGrid initialRows={initialRows} ncolumns={columns} />
					</Grid>
				</Grid>
			</FormControl>
		</MainCard>
	);
};

export default SamplePage;
