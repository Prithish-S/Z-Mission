package com.zmission.codespot.persist;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//IDType
//BatchValue
//Application setUp Api
//Application Stratup, Application cleanup-->print statement
//Application table la batch number pota pothu like 1,2,3
//batch limit should be in application.properties
//always read value from db instead of giving value from counter --> read and increment
//springboot la atomicity support panra mari oru feature for the uniqueID generation table.

@Entity
@Table(name="IDTable")
public class IDEntity
{
    @Id
    private String IDName;

    private Long IDValue;

    public String getIDName()
    {
        return this.IDName;
    }
    public Long getIDValue()
    {
        return this.IDValue;
    }
    public void setIDValue(Long value)
    {
        this.IDValue=value;
    }

}
