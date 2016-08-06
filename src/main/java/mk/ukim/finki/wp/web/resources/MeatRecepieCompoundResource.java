package mk.ukim.finki.wp.web.resources;

import mk.ukim.finki.wp.model.MeatRecepieCompound;
import mk.ukim.finki.wp.service.CrudMeatRecepieCompoundService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/meat_recepie_compound")
public class MeatRecepieCompoundResource extends CrudResource<MeatRecepieCompound,CrudMeatRecepieCompoundService> {

	@Autowired
	private CrudMeatRecepieCompoundService service;

	@Override
	public CrudMeatRecepieCompoundService getService() {
		return service;
	}
	
}
