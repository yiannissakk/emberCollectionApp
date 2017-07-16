//Using the pouchDB adapter that allows storing data locally, at store
import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var db = new PouchDB('local_pouch');

export default Adapter.extend({
	db: db
});