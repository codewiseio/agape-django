
observers = {}

class Observer():

	context  = None
	method   = None
	data     = None

	def __init__(self, context, method, data=None):
		self.context = context
		self.method  = method
		self.data = data

	def destroy(self):
		observers[self.context].remove(self)

	def react(self,*args):
		self.method(self,*args)


def on(context, method, data=None):

	observer = Observer(context,method,data)
	observers[context] = observers.get(context,[])
	observers[context].append( observer )
	return observer

def trigger(context, *args,**kwargs):

	for observer in observers.get(context,[]):
		observer.react(*args)

