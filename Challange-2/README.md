####Student Grade Generator (Toy Problem)
####challange:

## JavaScript Logic Summary

The core functionality of this application is handled in the `script.js` file. Here's a summary of how the JavaScript code works:

### **1. Get the User Input:**
The speed entered by the user is retrieved from the input field with the ID `speed`.

### **2. Validate the Input:**
The entered speed is validated:
- If the input is not a number or is empty, the app displays an error message: **"Please enter a valid speed."**

### **3. Define the Speed Limit:**
The speed limit is set to 70 km/h, and if the input speed is less than or equal to this, the result will be `"Ok"`.

### **4. Calculate Demerit Points (If Over the Speed Limit):**
If the entered speed exceeds 70 km/h:
- The difference between the entered speed and the speed limit is calculated.
- This difference is divided by 5 (since 1 demerit point is given for every 5 km/h over the limit), and `Math.floor()` is used to round down to the nearest whole number.

### **5. License Suspension:**
If the calculated demerit points exceed 12, the app displays **"License suspended"**.

### **6. Display the Result:**
The final result is displayed in a paragraph with the ID `result`. Depending on the conditions, it will show:
- `"Ok"` if the speed is within the limit.
- `"Points: X"` where `X` is the number of demerit points.
- `"License suspended"` if the number of points exceeds 12.

## Example Scenarios

- **Speed: 80 km/h**  
  The driver is 10 km/h over the speed limit.  
  **Result**: `"Points: 2"`

- **Speed: 120 km/h**  
  The driver is 50 km/h over the speed limit.  
  **Result**: `"Points: 10"`

- **Speed: 190 km/h**  
  The driver is 120 km/h over the speed limit.  
  **Result**: `"License suspended"`

## How to Run Locally

1. **Clone or download the repository**:
   - If using Git, run:  
     ```bash
     git clone https://github.com/yourusername/speed-check.git
     ```

2. **Open the `index.html` file**:
   - Double-click or right-click on the `index.html` file and open it in your preferred browser.

3. **Interact with the app**:
   - Enter a speed and click "Check Speed" to view the result.

## License

This project is open-source and available under the [MIT License](LICENSE).

