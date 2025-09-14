import { useState } from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Checkbox
} from '@mui/material'

import { Warning } from '@mui/icons-material';


const rows = [
    { 'name': 'Eggs', 'amount': 12, 'unit': 'pcs' },
    { 'name': 'Milk', 'amount': 1, 'unit': 'l' },
    { 'name': 'Butter', 'amount': 250, 'unit': 'g' },
    { 'name': 'Cheese', 'amount': 200, 'unit': 'g' },
    { 'name': 'Yogurt', 'amount': 4, 'unit': 'cups' },
    { 'name': 'Ham', 'amount': 150, 'unit': 'g' },
    { 'name': 'Tomatoes', 'amount': 4, 'unit': 'pcs' },
    { 'name': 'Lettuce', 'amount': 1, 'unit': 'head' },
    { 'name': 'Carrots', 'amount': 5, 'unit': 'pcs' },
    { 'name': 'Orange Juice', 'amount': 1, 'unit': 'l' },
];


function InStock() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleReport = (itemName: string) => {
        setSelectedItem(itemName);
        setOpen(true);
    }
    const handleConfirm = () => {
        setOpen(false);
    }
    const handleCancel = () => {
        setOpen(false);
    }

    return (
        <>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Report Mistake</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please describe the mistake for "{selectedItem}".
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Checkbox id="urgent" />
                        <label htmlFor="urgent">Allow sharing of last image of fridge</label>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <h1 className='font-bold text-xl'>In your fridge:</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="center">amount</TableCell>
                            <TableCell align="right">unit</TableCell>
                            <TableCell align="right">report mistake</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="left">{row.unit}</TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color="error" size="small" onClick={() => handleReport(row.name)}><Warning /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}

export default InStock
