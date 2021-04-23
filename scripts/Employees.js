import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {

            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) { //first loop

                if (employee.id === parseInt(employeeId)) { //on first employee...turn employeeId into an integer
                    
                    
                    const employeeOrders = orders.filter(
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )

                    window.alert(`${employee.name} sold ${employeeOrders.length} products.`)
                }
            }
        }
    }
)

//const employees = getEmployees()
//const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        //html += `<li id="employee--${employee.Id}">${employee.name}</li>`
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

