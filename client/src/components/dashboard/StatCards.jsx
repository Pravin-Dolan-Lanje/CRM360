import { FaUsers, FaUserTie, FaTasks, FaUser } from "react-icons/fa";

const StatCards = ({ stats }) => {

    const cards = [
        {
            title: "Customers",
            value: stats.totalCustomers,
            color: "primary",
            icon: <FaUsers size={35}/>
        },
        {
            title: "Leads",
            value: stats.totalLeads,
            color: "success",
            icon: <FaUserTie size={35}/>
        },
        {
            title: "Tasks",
            value: stats.totalTasks,
            color: "warning",
            icon: <FaTasks size={35}/>
        },
        {
            title: "Users",
            value: stats.totalUsers,
            color: "danger",
            icon: <FaUser size={35}/>
        }
    ];

    return (

        <div className="row">

            {

                cards.map((card,index)=>(

                    <div
                        className="col-md-3 mb-3"
                        key={index}
                    >

                        <div className={`card border-${card.color} shadow`}>

                            <div className="card-body d-flex justify-content-between">

                                <div>

                                    <h2>{card.value}</h2>

                                    <p>{card.title}</p>

                                </div>

                                <div>

                                    {card.icon}

                                </div>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};

export default StatCards;