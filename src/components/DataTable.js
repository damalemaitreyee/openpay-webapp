import React from "react";
import TableRow from "./TableRow";
import "./datatable.css";

const DataTable = (props) => {
  let suggestionList = props.tableData.map((item) => ({
    Covered_Recipient_First_Name: item.Covered_Recipient_First_Name,
    Covered_Recipient_Last_Name: item.Covered_Recipient_Last_Name,
    Recipient_City: item.Recipient_City,
    Recipient_Country: item.Recipient_Country,
    Covered_Recipient_Specialty_1: item.Covered_Recipient_Specialty_1,
    Record_ID: item.Record_ID,
    Change_Type: item.Change_Type,
    Covered_Recipient_Type: item.Covered_Recipient_Type,
    Teaching_Hospital_CCN: item.Teaching_Hospital_CCN,
    Teaching_Hospital_ID: item.Teaching_Hospital_ID,
    Teaching_Hospital_Name: item.Teaching_Hospital_Name,
    Covered_Recipient_Profile_ID: item.Covered_Recipient_Profile_ID,
    Covered_Recipient_NPI: item.Covered_Recipient_NPI,
    Covered_Recipient_Middle_Name: item.Covered_Recipient_Middle_Name,
    Covered_Recipient_Name_Suffix: item.Covered_Recipient_Name_Suffix,
    Recipient_Primary_Business_Street_Address_Line1:
      item.Recipient_Primary_Business_Street_Address_Line1,
    Recipient_Primary_Business_Street_Address_Line2:
      item.Recipient_Primary_Business_Street_Address_Line2,
    Recipient_State: item.Recipient_State,
    Recipient_Zip_Code: item.Recipient_Zip_Code,
    Recipient_Province: item.Recipient_Province,
    Recipient_Postal_Code: item.Recipient_Postal_Code,
    Covered_Recipient_Primary_Type_1: item.Covered_Recipient_Primary_Type_1,
    Covered_Recipient_Primary_Type_2: item.Covered_Recipient_Primary_Type_2,
    Covered_Recipient_Primary_Type_3: item.Covered_Recipient_Primary_Type_3,
    Covered_Recipient_Primary_Type_4: item.Covered_Recipient_Primary_Type_4,
    Covered_Recipient_Primary_Type_5: item.Covered_Recipient_Primary_Type_5,
    Covered_Recipient_Primary_Type_6: item.Covered_Recipient_Primary_Type_6,
    Covered_Recipient_Specialty_2: item.Covered_Recipient_Specialty_2,
    Covered_Recipient_Specialty_3: item.Covered_Recipient_Specialty_3,
    Covered_Recipient_Specialty_4: item.Covered_Recipient_Specialty_4,
    Covered_Recipient_Specialty_5: item.Covered_Recipient_Specialty_5,
    Covered_Recipient_Specialty_6: item.Covered_Recipient_Specialty_6,
    Covered_Recipient_License_State_code1:
      item.Covered_Recipient_License_State_code1,
    Covered_Recipient_License_State_code2:
      item.Covered_Recipient_License_State_code2,
    Covered_Recipient_License_State_code3:
      item.Covered_Recipient_License_State_code3,
    Covered_Recipient_License_State_code4:
      item.Covered_Recipient_License_State_code4,
    Covered_Recipient_License_State_code5:
      item.Covered_Recipient_License_State_code5,
    Submitting_Applicable_Manufacturer_or_Applicable_GPO_Name:
      item.Submitting_Applicable_Manufacturer_or_Applicable_GPO_Name,
    Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID:
      item.Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID,
    Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Name:
      item.Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Name,
    Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_State:
      item.Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_State,
    Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Country:
      item.Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Country,
    Total_Amount_of_Payment_USDollars: item.Total_Amount_of_Payment_USDollars,
    Date_of_Payment: item.Date_of_Payment,
    Number_of_Payments_Included_in_Total_Amount:
      item.Number_of_Payments_Included_in_Total_Amount,
    Form_of_Payment_or_Transfer_of_Value:
      item.Form_of_Payment_or_Transfer_of_Value,
    Nature_of_Payment_or_Transfer_of_Value:
      item.Nature_of_Payment_or_Transfer_of_Value,
    City_of_Travel: item.City_of_Travel,
    State_of_Travel: item.State_of_Travel,
    Country_of_Travel: item.Country_of_Travel,
    Physician_Ownership_Indicator: item.Physician_Ownership_Indicator,
    Third_Party_Payment_Recipient_Indicator:
      item.Third_Party_Payment_Recipient_Indicator,
    Name_of_Third_Party_Entity_Receiving_Payment_or_Transfer_of_Value:
      item.Name_of_Third_Party_Entity_Receiving_Payment_or_Transfer_of_Value,
    Charity_Indicator: item.Charity_Indicator,
    Third_Party_Equals_Covered_Recipient_Indicator:
      item.Third_Party_Equals_Covered_Recipient_Indicator,
    Contextual_Information: item.Contextual_Information,
    Delay_in_Publication_Indicator: item.Delay_in_Publication_Indicator,
    Dispute_Status_for_Publication: item.Dispute_Status_for_Publication,
    Related_Product_Indicator: item.Related_Product_Indicator,
    Covered_or_Noncovered_Indicator_1: item.Covered_or_Noncovered_Indicator_1,
    Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_1:
      item.Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_1,
    Product_Category_or_Therapeutic_Area_1:
      item.Product_Category_or_Therapeutic_Area_1,
    Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_1:
      item.Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_1,
    Associated_Drug_or_Biological_NDC_1:
      item.Associated_Drug_or_Biological_NDC_1,
    Associated_Device_or_Medical_Supply_PDI_1:
      item.Associated_Device_or_Medical_Supply_PDI_1,
    Covered_or_Noncovered_Indicator_2: item.Covered_or_Noncovered_Indicator_2,
    Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_2:
      item.Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_2,
    Product_Category_or_Therapeutic_Area_2:
      item.Product_Category_or_Therapeutic_Area_2,
    Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_2:
      item.Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_2,
    Associated_Drug_or_Biological_NDC_2:
      item.Associated_Drug_or_Biological_NDC_2,
    Associated_Device_or_Medical_Supply_PDI_2:
      item.Associated_Device_or_Medical_Supply_PDI_2,
    Covered_or_Noncovered_Indicator_3: item.Covered_or_Noncovered_Indicator_3,
    Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_3:
      item.Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_3,
    Product_Category_or_Therapeutic_Area_3:
      item.Product_Category_or_Therapeutic_Area_3,
    Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_3:
      item.Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_3,
    Associated_Drug_or_Biological_NDC_3:
      item.Associated_Drug_or_Biological_NDC_3,
    Associated_Device_or_Medical_Supply_PDI_3:
      item.Associated_Device_or_Medical_Supply_PDI_3,
    Covered_or_Noncovered_Indicator_4: item.Covered_or_Noncovered_Indicator_4,
    Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_4:
      item.Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_4,
    Product_Category_or_Therapeutic_Area_4:
      item.Product_Category_or_Therapeutic_Area_4,
    Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_4:
      item.Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_4,
    Associated_Drug_or_Biological_NDC_4:
      item.Associated_Drug_or_Biological_NDC_4,
    Associated_Device_or_Medical_Supply_PDI_4:
      item.Associated_Device_or_Medical_Supply_PDI_4,
    Covered_or_Noncovered_Indicator_5: item.Covered_or_Noncovered_Indicator_5,
    Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_5:
      item.Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_5,
    Product_Category_or_Therapeutic_Area_5:
      item.Product_Category_or_Therapeutic_Area_5,
    Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_5:
      item.Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_5,
    Associated_Drug_or_Biological_NDC_5:
      item.Associated_Drug_or_Biological_NDC_5,
    Associated_Device_or_Medical_Supply_PDI_5:
      item.Associated_Device_or_Medical_Supply_PDI_5,
    Program_Year: item.Program_Year,
    Payment_Publication_Date: item.Payment_Publication_Date,
  }));

  const rows = [];
  suggestionList.forEach((element) => {
    rows.push(<TableRow row={element} key={element.Record_ID} />);
  });
  return (
    <div>
      <table className="filter-table">
        <thead>
          <tr>
            <th>Covered_Recipient_First_Name</th>
            <th>Covered_Recipient_Last_Name</th>
            <th>Recipient_City</th>
            <th>Recipient_Country</th>
            <th>Covered_Recipient_Specialty_1</th>
            <th>Record_ID</th>
            <th>Change_Type</th> <th>Covered_Recipient_Type</th>
            <th>Teaching_Hospital_CCN</th> <th>Teaching_Hospital_ID</th>
            <th>Teaching_Hospital_Name</th>
            <th>Covered_Recipient_Profile_ID</th>
            <th>Covered_Recipient_NPI</th>
            <th>Covered_Recipient_Middle_Name</th>
            <th>Covered_Recipient_Name_Suffix</th>
            <th>Recipient_Primary_Business_Street_Address_Line1</th>
            <th>Recipient_Primary_Business_Street_Address_Line2</th>
            <th>Recipient_State</th>
            <th>Recipient_Zip_Code</th>
            <th>Recipient_Province</th> <th>Recipient_Postal_Code</th>
            <th>Covered_Recipient_Primary_Type_1</th>
            <th>Covered_Recipient_Primary_Type_2</th>
            <th>Covered_Recipient_Primary_Type_3</th>
            <th>Covered_Recipient_Primary_Type_4</th>
            <th>Covered_Recipient_Primary_Type_5</th>
            <th>Covered_Recipient_Primary_Type_6</th>
            <th>Covered_Recipient_Specialty_2</th>
            <th>Covered_Recipient_Specialty_3</th>
            <th>Covered_Recipient_Specialty_4</th>
            <th>Covered_Recipient_Specialty_5</th>
            <th>Covered_Recipient_Specialty_6</th>
            <th>Covered_Recipient_License_State_code1</th>
            <th>Covered_Recipient_License_State_code2</th>
            <th>Covered_Recipient_License_State_code3</th>
            <th>Covered_Recipient_License_State_code4</th>
            <th>Covered_Recipient_License_State_code5</th>
            <th>Submitting_Applicable_Manufacturer_or_Applicable_GPO_Name</th>
            <th>Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_ID</th>
            <th>
              Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Name
            </th>
            <th>
              Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_State
            </th>
            <th>
              Applicable_Manufacturer_or_Applicable_GPO_Making_Payment_Country
            </th>
            <th>Total_Amount_of_Payment_USDollars</th>
            <th>Date_of_Payment</th>
            <th>Number_of_Payments_Included_in_Total_Amount</th>
            <th>Form_of_Payment_or_Transfer_of_Value</th>
            <th>Nature_of_Payment_or_Transfer_of_Value</th>
            <th>City_of_Travel</th> <th>State_of_Travel</th>
            <th>Country_of_Travel</th> <th>Physician_Ownership_Indicator</th>
            <th>Third_Party_Payment_Recipient_Indicator</th>
            <th>
              Name_of_Third_Party_Entity_Receiving_Payment_or_Transfer_of_Value
            </th>
            <th>Charity_Indicator</th>
            <th>Third_Party_Equals_Covered_Recipient_Indicator</th>
            <th>Contextual_Information</th>
            <th>Delay_in_Publication_Indicator</th>
            <th>Dispute_Status_for_Publication</th>
            <th>Related_Product_Indicator</th>
            <th>Covered_or_Noncovered_Indicator_1</th>
            <th>Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_1</th>
            <th>Product_Category_or_Therapeutic_Area_1</th>
            <th>Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_1</th>
            <th>Associated_Drug_or_Biological_NDC_1</th>
            <th>Associated_Device_or_Medical_Supply_PDI_1</th>
            <th>Covered_or_Noncovered_Indicator_2</th>
            <th>Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_2</th>
            <th>Product_Category_or_Therapeutic_Area_2</th>
            <th>Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_2</th>
            <th>Associated_Drug_or_Biological_NDC_2</th>
            <th>Associated_Device_or_Medical_Supply_PDI_2</th>
            <th>Covered_or_Noncovered_Indicator_3</th>
            <th>Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_3</th>
            <th>Product_Category_or_Therapeutic_Area_3</th>
            <th>Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_3</th>
            <th>Associated_Drug_or_Biological_NDC_3</th>
            <th>Associated_Device_or_Medical_Supply_PDI_3</th>
            <th>Covered_or_Noncovered_Indicator_4</th>
            <th>Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_4</th>
            <th>Product_Category_or_Therapeutic_Area_4</th>
            <th>Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_4</th>
            <th>Associated_Drug_or_Biological_NDC_4</th>
            <th>Associated_Device_or_Medical_Supply_PDI_4</th>
            <th>Covered_or_Noncovered_Indicator_5</th>
            <th>Indicate_Drug_or_Biological_or_Device_or_Medical_Supply_5</th>
            <th>Product_Category_or_Therapeutic_Area_5</th>
            <th>Name_of_Drug_or_Biological_or_Device_or_Medical_Supply_5</th>
            <th>Associated_Drug_or_Biological_NDC_5</th>
            <th>Associated_Device_or_Medical_Supply_PDI_5</th>
            <th>Program_Year</th> <th>Payment_Publication_Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
