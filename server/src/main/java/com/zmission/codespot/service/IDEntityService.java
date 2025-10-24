package com.zmission.codespot.service;

import com.zmission.codespot.persist.IDEntity;
import com.zmission.codespot.persist.IDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IDEntityService
{
    @Autowired
    IDRepository IDRepositoryObj;

    public  void updateValue(String IDName,Long batchLimit)
    {
       IDEntity ID= IDRepositoryObj.findById(IDName.toLowerCase()).get();
       Long IDValue=ID.getIDValue();
       ID.setIDValue(IDValue+batchLimit);
       IDRepositoryObj.save(ID);
    }
}
