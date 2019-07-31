import MicroEvent from 'microevent'

class EventEmitter {

}

MicroEvent.mixin(EventEmitter)


const EventEmitterInstance = new EventEmitter();

export default EventEmitterInstance

//The event emitter instance is more of a service really