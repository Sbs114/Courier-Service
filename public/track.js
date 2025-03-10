
let cards = "";
const trackingDetailsElement = document.getElementById('trackingDetails');

const shipments = fetch('/get-details')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(orders => {
        console.log('Orders:', orders);

        orders.forEach(order => {

            cards += `
                    <div class="card">
                        <div class="card-header">
                            <h2>Shipping Details</h2>
                        </div>
                        <div class="card-body">
                            <p><strong>Receiver:</strong> ${order.receiver.firstName} ${order.receiver.middleName} ${order.receiver.lastName}</p>
                            <p><strong>Address:</strong> ${order.address.houseNo} ${order.address.areaName}, ${order.address.cityName}, ${order.address.state}, ${order.address.country} - ${order.address.pinCode}</p>
                            <p><strong>Contact:</strong> ${order.contact.contactNo}</p>
                            <p><strong>Delivery Time:</strong> ${order.deliveryTime[0]}</p>
                        </div>
                    </div>
                `;
        });        

        trackingDetailsElement.innerHTML = cards;
    })
    .catch(error => {
        console.error('Error fetching order details:', error);
        const errorMessageElement = document.getElementById('errorMessage');
        errorMessageElement.textContent = 'Failed to fetch order details. Please try again later.';
    });
