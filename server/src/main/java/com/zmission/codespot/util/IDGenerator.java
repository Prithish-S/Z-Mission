package com.zmission.codespot.util;


import com.zmission.codespot.service.IDEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class IDGenerator
{
    Long uniqueCourseID=0L;
    Long uniqueModuleID=0L;
    Long batchLimit=50L;

    @Autowired
    IDEntityService iDEntityService;
    public Long getCourseId()
    {
        uniqueCourseID++;
        if(uniqueCourseID%batchLimit==0)
        {
            updateRoutine("courseID");
        }
        return uniqueCourseID;
    }
//    public Long getId(String IDName)
//    {
//        IDName=IDName.toLowerCase();
//
//    }
    public Long getModuleId()
    {
        uniqueModuleID++;
        if(uniqueModuleID%batchLimit==0)
        {
            updateRoutine("moduleID");
        }
        return uniqueModuleID;
    }
    public void updateRoutine(String IDName)
    {
        IDName=IDName.toLowerCase();
        if(IDName.equals("courseid"))
        {
            iDEntityService.updateValue("courseID",batchLimit);
        }
        else if(IDName.equals("moduleid"))
        {
            iDEntityService.updateValue("moduleID",batchLimit);
        }
    }


}
