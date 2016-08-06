package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.Compound;
import mk.ukim.finki.wp.model.Food;
import mk.ukim.finki.wp.service.CrudCompoundService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/compounds")
public class CompoundResource extends CrudResource<Compound, CrudCompoundService> {

	@Autowired
	private CrudCompoundService service;

	@Override
	public CrudCompoundService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_compound_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<Compound> getByCompoundName(@PathVariable String name) {
		return getService().findByName(name);
	}

}
