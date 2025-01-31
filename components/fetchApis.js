const vercelUrl = 'https://notes-maker-backend-flax.vercel.app';

// Function to fetch items using GET method
export async function fetchItems(email) {
    try {
        const response = await fetch(`${vercelUrl}/allNotes?email=${email}`);

        // console.log({ response });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log('all fetched Notes:', data);
        return data?.items;
    } catch (error) {
        // console.error('Error fetching items:', error);
    }
}

// Function to create a new item using POST method
export async function createItem(itemData) {
    try {
        // console.log({ itemData })
        const response = await fetch(`${vercelUrl}/note`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });
        // console.log({ response })
        if (!response.ok) {
            throw new Error('Failed to create item');
        }
        const data = await response.json();
        // console.log('New item created:', data);
        return data;
    } catch (error) {
        // console.error('Error creating item:', error);
    }
}

// Function to update an item using PUT method
export async function updateItem(id, textData) {
    try {
        const response = await fetch(`${vercelUrl}/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ textData }),
        });
        if (!response.ok) {
            throw new Error('Failed to update item');
        }
        // console.log({ response })
        const data = await response.json();
        // console.log('Item updated:', data);
        return data;
    } catch (error) {
        // console.log('Error updating item:', error);
    }
}

// Function to delete an item using DELETE method
export async function deleteItem(id) {
    try {
        const response = await fetch(`${vercelUrl}/notes/${id}`, {
            method: 'DELETE',
        });
        // console.log({ response })
        if (!response.ok) {
            throw new Error('Failed to delete item');
        }
        // console.log('Item deleted');
    } catch (error) {
        // console.error('Error deleting item:', error);
    }
}

// // Example usage:

// // Fetch all items
// fetchItems();

// // Create a new item
// const newItemData = { name: 'New Item', description: 'A new item created via API' };
// createItem(newItemData);

// // Update an item (replace {id} with the actual item ID)
// const itemIdToUpdate = '{id}';
// const updatedItemData = { name: 'Updated Item', description: 'Item updated via API' };
// updateItem(itemIdToUpdate, updatedItemData);

// // Delete an item (replace {id} with the actual item ID)
// const itemIdToDelete = '{id}';
// deleteItem(itemIdToDelete);
