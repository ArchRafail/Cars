# Cars

Angular project.</br>
Single page html with routing to item state.</br>
Main page has 2 buttons on the tab menu at the top of the window: "Home" and "Add vehicle".</br>
Also, on the main page is located list of vehicles in table format.</br>
Each row contains id, manufacturer, model, type, color, year of vehicle.<br>
Each row has 3 round buttons that allow search this vehicle by google, edit or delete of record.</br>
The table can sort and filter the information by all columns.</br>
After pressing the button "Edit" or "Add vehicle" on the main page you will be navigated to vehicle-item component.</br>
So, depends of the button that was pressed vehicle-item component will be empty or filled with info from the table.</br>
The form (vehicle-item component) has 2 buttons: "Back", that navigate you to the main page and "Save", that save the record.</br>
"Save" button can be disabled if some of field is empty/invalid or after pressing the button "Save".</br>
</br>
Types of vehicles are a constant and contains 19 body types of vehicles.</br>
Colors are a constant and implement 142 standard WebColors.</br>
2 HTTP erros were processed: 404 and 500. And according to this the proper page is showing.</br>
</br>
Mock DB was made at mockapi.io.</br>
