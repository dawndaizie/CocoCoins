import React from "react";
import CustomPieChart from "../charts/CustomPieChart";

const colors = ["#002626", "#24bdad", "#a4fbf7"]

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
    const balanceData = [
        { name: "Total Balance", amount: totalBalance },
        { name: "Total Expenses", amount: totalExpense },
        { name: "Total Income", amount: totalIncome }
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50"> 
        <div className="flex items-center justify-between">
            <h5 className="text-lg">Financial Overview</h5>
        </div>

        <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={colors}
        showTextAnchor
        />
        </div>
    )
}

export default FinanceOverview;