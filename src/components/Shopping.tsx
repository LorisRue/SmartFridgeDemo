import { useState } from "react";

import {
    List,
    ListItem,
    IconButton,
    ListItemText,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

function Shopping() {
    const [items, setItems] = useState(['Jam', 'Chicken Breast', 'Beef']);
    const [open, setOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);

    const handleConfirm = () => {
        if (itemToDelete) {
            setItems(items.filter(i => i !== itemToDelete));
            setItemToDelete(null);
            setOpen(false);
        }
    };
    const handleCancel = () => {
        setItemToDelete(null);
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Delete {itemToDelete}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete "{itemToDelete}"?
                    </DialogContentText>
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
            <h1 className='font-bold text-xl'>Shopping list:</h1>
            <List>
                {items.map((item) => (
                    <ListItem key={item} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => {
                            setItemToDelete(item);
                            setOpen(true);
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemText>
                            {item}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Shopping
