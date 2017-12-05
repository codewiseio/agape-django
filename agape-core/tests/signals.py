from django.test import TestCase
from agape.signals import on, trigger

class OnTriggerTestCase(TestCase):
    def setUp(self):
        pass

    def test_basic_callback(self):
        
        def callback(o, arg, data=None):
            self.assertEqual(o.context,'event.context:before');
            self.assertEqual(arg,'eventData')
            self.assertEqual(data,'userData')

        on('event.context:before',callback,'userData')

    def test_destroy_callback(self):

        scope = {'counter': 0}
        def callback(context, modifier):
            self.assertEqual(o.context,'event.context:after');
            scope['counter'] = scope['counter']+modifier
            
       
        o = on('event.context:after',callback)
        
        trigger('event.context:after',1);
        self.assertEqual(scope['counter'],1)

        o.destroy()
        trigger('event.context:after',1);
        self.assertEqual(scope['counter'],1)

    
