from __future__ import absolute_import

from django.db import models

import hashlib
import datetime


# generates 16 character long hash
def _createHash():
	hash = hashlib.sha1()
	seed = str(datetime.datetime.now())
	hash.update(seed)
	return hash.hexdigest()[:-16]
    
class BaseModel(models.Model):
    """
    Base model that has properties we want all our models to have
    """
    
    datetime_created = models.DateTimeField(auto_now_add=True)
    datetime_updated = models.DateTimeField(auto_now=True)
    hash = models.CharField(max_length=64, default=_createHash, unique=True)
    
    class Meta:
        abstract = True
