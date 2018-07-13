from django.test import TestCase
from agape.test import ModelTests, SerializerTests, ApiTests
import copy


# Create your tests here.
from .models import Property
from .serializers import PropertySerializer


PROPERTY_MODEL = Property
PROPERTY_SERIALIZER_CLASS = PropertySerializer
PROPERTY_ENTITY_NAME = 'property'
PROPERTY_API_END_POINT = '/api/v1/properties/'


PROPERTY_CREATE_DATA = [
    {
        'name':'Grand Budapest Hotel',
        'description': 'Lorem ipsum sed vitae',
    },
    {
        'name': 'Plaza Hotel',
        'description': 'New York will never be the same.'
    },  
]

PROPERTY_EXPECT_DATA = copy.deepcopy(PROPERTY_CREATE_DATA)
PROPERTY_EXPECT_DATA[0]['id'] = 1
PROPERTY_EXPECT_DATA[1]['id'] = 2


PROPERTY_UPDATE_DATA = [
    {
        # 'abbreviation': 'GBH',
        'description': 'Where dreams come true.'
    },
    {
        'name': 'The Plaza Hotel',
        # 'abbreviation': 'Plaza'
    }
]

PROPERTY_UPDATE_EXPECT_DATA = copy.deepcopy(PROPERTY_UPDATE_DATA)



class PropertyTestCase(TestCase, ModelTests):

    def setUp(self):
        self.model              = PROPERTY_MODEL
        self.create_data        = PROPERTY_CREATE_DATA
        self.expect_data        = PROPERTY_EXPECT_DATA
        self.update_data        = PROPERTY_UPDATE_DATA
        self.update_expect_data = PROPERTY_UPDATE_EXPECT_DATA


class PropertySerializerTestCase(TestCase, SerializerTests):

    def setUp(self):
        super().setUp();

        self.model              = PROPERTY_MODEL
        self.serializer_class   = PROPERTY_SERIALIZER_CLASS

        self.create_data        = PROPERTY_CREATE_DATA
        self.expect_data        = PROPERTY_EXPECT_DATA
        self.update_data        = PROPERTY_UPDATE_DATA
        self.update_expect_data = PROPERTY_UPDATE_EXPECT_DATA


        self.serialized_create_data = self.transform_data_to_serialized_data( self.create_data )
        
        self.serialized_expect_data = self.transform_data_to_serialized_data( self.expect_data )

        self.serialized_update_data = self.transform_data_to_serialized_data( self.update_data )

        self.serialized_update_expect_data = self.transform_data_to_serialized_data( self.update_expect_data )


class PropertyApiTestCase(TestCase, ApiTests):

    def setUp(self):
        super().setUp()

        self.model              = PROPERTY_MODEL
        self.serializer_class   = PROPERTY_SERIALIZER_CLASS
        self.entity             = PROPERTY_ENTITY_NAME
        self.api_end_point      = PROPERTY_API_END_POINT

        self.create_data        = self.transform_data_to_serialized_data(PROPERTY_CREATE_DATA)

        self.expect_data        = self.transform_data_to_serialized_data(PROPERTY_EXPECT_DATA)

        self.update_data        = self.transform_data_to_serialized_data(PROPERTY_UPDATE_DATA)

        self.update_expect_data = self.transform_data_to_serialized_data(PROPERTY_UPDATE_EXPECT_DATA)




#################################
# 
# Room Types
# 
#################################
from django.test import TestCase
from agape.test import ModelTests, SerializerTests, ApiTests
import copy


# Create your tests here.
from .models import RoomType
from .serializers import RoomTypeSerializer


ROOM_TYPE_MODEL = RoomType
ROOM_TYPE_SERIALIZER_CLASS = RoomTypeSerializer
ROOM_TYPE_ENTITY_NAME = 'room-type'
ROOM_TYPE_API_END_POINT = '/api/v1/room-types/'


ROOM_TYPE_CREATE_DATA = [
    {
        'label':'Basic',
        'occupancy': 2
    },
    {
        'label':'Deluxe',
        'occupancy': 2
    },  
     {
        'label':'Suite',
        'occupancy': 2
    },    
]

ROOM_TYPE_EXPECT_DATA = copy.deepcopy(ROOM_TYPE_CREATE_DATA)

i = 0
while i < len(ROOM_TYPE_CREATE_DATA):
    ROOM_TYPE_EXPECT_DATA[i]['id'] = i+1
    i+=1



ROOM_TYPE_UPDATE_DATA = [
    {
        'description': 'Standard room'
    },
    {
        'description': 'Room with AC'
    },   
    {
        'description': 'Room with AC and kitchen',
        'occupancy': 4
    },     
]

ROOM_TYPE_UPDATE_EXPECT_DATA = copy.deepcopy(ROOM_TYPE_UPDATE_DATA)



class RoomTypeTestCase(TestCase, ModelTests):

    def setUp(self):
        self.model              = ROOM_TYPE_MODEL
        self.create_data        = ROOM_TYPE_CREATE_DATA
        self.expect_data        = ROOM_TYPE_EXPECT_DATA
        self.update_data        = ROOM_TYPE_UPDATE_DATA
        self.update_expect_data = ROOM_TYPE_UPDATE_EXPECT_DATA


class RoomTypeSerializerTestCase(TestCase, SerializerTests):

    def setUp(self):
        super().setUp();

        self.model              = ROOM_TYPE_MODEL
        self.serializer_class   = ROOM_TYPE_SERIALIZER_CLASS

        self.create_data        = ROOM_TYPE_CREATE_DATA
        self.expect_data        = ROOM_TYPE_EXPECT_DATA
        self.update_data        = ROOM_TYPE_UPDATE_DATA
        self.update_expect_data = ROOM_TYPE_UPDATE_EXPECT_DATA


        self.serialized_create_data = self.transform_data_to_serialized_data( self.create_data )
        
        self.serialized_expect_data = self.transform_data_to_serialized_data( self.expect_data )

        self.serialized_update_data = self.transform_data_to_serialized_data( self.update_data )

        self.serialized_update_expect_data = self.transform_data_to_serialized_data( self.update_expect_data )


class RoomTypeApiTestCase(TestCase, ApiTests):

    def setUp(self):
        super().setUp()

        self.model              = ROOM_TYPE_MODEL
        self.serializer_class   = ROOM_TYPE_SERIALIZER_CLASS
        self.entity             = ROOM_TYPE_ENTITY_NAME
        self.api_end_point      = ROOM_TYPE_API_END_POINT

        self.create_data        = self.transform_data_to_serialized_data(ROOM_TYPE_CREATE_DATA)

        self.expect_data        = self.transform_data_to_serialized_data(ROOM_TYPE_EXPECT_DATA)

        self.update_data        = self.transform_data_to_serialized_data(ROOM_TYPE_UPDATE_DATA)

        self.update_expect_data = self.transform_data_to_serialized_data(ROOM_TYPE_UPDATE_EXPECT_DATA)






#################################
#
# Room Tests
#
#################################


# Create your tests here.
from .models import Room
from .serializers import RoomSerializer


ROOM_MODEL = Room
ROOM_SERIALIZER_CLASS = RoomSerializer
ROOM_ENTITY_NAME = 'room'
ROOM_API_END_POINT = '/api/v1/rooms/'


ROOM_CREATE_DATA = [
    {
        'property_id': 1,
        'name': 'Kuna Quarters'
    },
    {
        'property_id': 1,
        'name': 'Embara Bungalow'
    },
    {
        'property_id': 1,
        'name': 'Gnobe Suite'
    },
    {
        'property_id': 2,
        'number': '101',
        'room_type_id': 1,
    },  
    {
        'property_id': 2,
        'number': '102',
        'room_type_id': 2,
    }, 
    {
        'property_id': 2,
        'number': '103',
        'room_type_id': 3
    }, 
]

ROOM_EXPECT_DATA = copy.deepcopy(ROOM_CREATE_DATA)

# assign object record ids to the expected data
i = 0
while i < len(ROOM_CREATE_DATA):
    ROOM_EXPECT_DATA[i]['id'] = i+1
    i+=1



ROOM_UPDATE_DATA = [
    {
        'name': 'Kuna Lodge'
    }
]

ROOM_UPDATE_EXPECT_DATA = copy.deepcopy(ROOM_UPDATE_DATA)



class RoomTestCase(TestCase, ModelTests):

    def setUp(self):

        self.model              = ROOM_MODEL
        self.create_data        = ROOM_CREATE_DATA
        self.expect_data        = ROOM_EXPECT_DATA
        self.update_data        = ROOM_UPDATE_DATA
        self.update_expect_data = ROOM_UPDATE_EXPECT_DATA

        self.create_requisite_objects(PROPERTY_MODEL,PROPERTY_CREATE_DATA)

        self.create_requisite_objects(ROOM_TYPE_MODEL,ROOM_TYPE_CREATE_DATA)


class RoomSerializerTestCase(TestCase, SerializerTests):

    def setUp(self):
        super().setUp();

        self.model              = ROOM_MODEL
        self.serializer_class   = ROOM_SERIALIZER_CLASS

        self.create_data        = ROOM_CREATE_DATA
        self.expect_data        = ROOM_EXPECT_DATA
        self.update_data        = ROOM_UPDATE_DATA
        self.update_expect_data = ROOM_UPDATE_EXPECT_DATA

        self.serialized_create_data = self.transform_data_to_serialized_data( self.create_data )
        
        self.serialized_expect_data = self.transform_data_to_serialized_data( self.expect_data )

        self.serialized_update_data = self.transform_data_to_serialized_data( self.update_data )

        self.serialized_update_expect_data = self.transform_data_to_serialized_data( self.update_expect_data )

        self.create_requisite_objects(PROPERTY_MODEL,PROPERTY_CREATE_DATA)

        self.create_requisite_objects(ROOM_TYPE_MODEL,ROOM_TYPE_CREATE_DATA)


class RoomApiTestCase(TestCase, ApiTests):

    def setUp(self):
        super().setUp()

        self.model              = ROOM_MODEL
        self.serializer_class   = ROOM_SERIALIZER_CLASS
        self.entity             = ROOM_ENTITY_NAME
        self.api_end_point      = ROOM_API_END_POINT

        self.create_data        = self.transform_data_to_serialized_data(ROOM_CREATE_DATA)

        self.expect_data        = self.transform_data_to_serialized_data(ROOM_EXPECT_DATA)

        self.update_data        = self.transform_data_to_serialized_data(ROOM_UPDATE_DATA)

        self.update_expect_data = self.transform_data_to_serialized_data(ROOM_UPDATE_EXPECT_DATA)

        self.create_requisite_objects(PROPERTY_MODEL,PROPERTY_CREATE_DATA)

        self.create_requisite_objects(ROOM_TYPE_MODEL,ROOM_TYPE_CREATE_DATA)
