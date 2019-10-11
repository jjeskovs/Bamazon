# bamazon

<h1>Bamazon! </h1>

<h2>About</h2>

<h2>Customer portal</h2>
Within the customer portal, on the first page load the user can the full inventory currently on hand at the store. Further, through command line the user can select the item they are interested. Then the user can select the quantity they would like to purchase.  

Once the item and the quantity has been selected, the app will check the quantity requested against the quantity on hand. Next, the app will check if the items on hand can cover the order. The user then will be notified either if the transaction was successful. 
Transaction complete!

<h2> Manager portal STILL UNDER DEVELOPMENT </h2>
Within the manager portal, the following items will be available:
* view all the inventory in the store 
*view all low inventory (less than 5 items on hand)
*add new Item to inventory 
*Delete items from inventory listing

<h2>Technology used: </h2>
* MySQL
* Node.JS
* JavaScript



<h2>Preview of the app:</h2>

**Home Screen with the list of current items on hand.**

![home-screen](images/home_screen.png)

**Placing the order, by selecting unique ID of the item and the quantity desired.**

![purchase](images/purchase_made.png)

**The app calculates the total for the purchase, and asks what step the user would like to do next, buy additional items or leave the store.**

Additional item:
![purchase](images/additional_purchase.png)

Leave the store:
![exit](images/exit.png)

**If the store cannot cover the order with the inventory on hand.**

![not_so_much](images/not_so_much.png)