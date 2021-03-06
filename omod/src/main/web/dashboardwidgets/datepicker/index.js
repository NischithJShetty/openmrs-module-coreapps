import angular from 'angular';
import openmrsApi from '@openmrs/angularjs-openmrs-api';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.css';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ar.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.az.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.bg.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.bn.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.br.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.bs.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ca.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.cs.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.cy.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.da.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.de.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.el.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.eo.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.et.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.eu.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.fa.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.fi.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.fo.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.gl.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.he.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.hi.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.hr.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.hu.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.hy.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.id.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.is.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.it.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ja.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ka.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.km.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ko.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.lt.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.lv.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.me.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.mk.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.mn.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ms.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.nb.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.nl.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.no.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.oc.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pl.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ro.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ru.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.si.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.sk.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.sl.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.sq.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.sr.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.sv.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.sw.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ta.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.tg.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.tr.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.uk.min.js';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.vi.min.js';
import './locales/bootstrap-datepicker.ht.js';

import { DatepickerComponent } from './datepicker.component';

export default angular.module("openmrs-contrib-dashboardwidgets.datepicker", [openmrsApi])
	.component(DatepickerComponent.selector, DatepickerComponent).name;