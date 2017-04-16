from __future__ import absolute_import
import os
# from credstash import getSecret
from django.core.exceptions import ImproperlyConfigured
# import six


# def process_booleans_from_strings(value):
#     """
#     Attempt to process strings into python booleans
#     """
#     if isinstance(value, six.string_types):
#         if value.lower() == 'true' or value == '1':
#             return True
#         if value.lower() == 'false' or value == '0':
#             return False
# 
#     return value


# def get_credstash_context_dict():
#     context_string = os.environ.get('CREDSTASH_CONTEXT', None)
#     context_dict = {}
#     if context_string:
#         for pair in context_string.split():
#             key, value = pair.split('=', 1)
#             context_dict.update({key: value})
#     return context_dict
# 
# CREDSTASH_CONTEXT = get_credstash_context_dict()
# USE_CREDSTASH = process_booleans_from_strings(
#     os.environ.get('USE_CREDSTASH', False))
# CREDSTASH_PREFIX = os.environ.get('CREDSTASH_PREFIX', '')

USE_CREDSTASH = False
def get_env_variable(var_name, default=None, show_warnings=True):
    """Get the environment variable or return exception."""
    value = default
    
    value = os.environ[var_name]

    # try:
    #     value = process_booleans_from_strings(os.environ[var_name])
    # except KeyError:
    #     # check credstash
    #     if USE_CREDSTASH:
    #         try:
    #             var_name = '{}{}'.format(CREDSTASH_PREFIX, var_name)
    #             value = process_booleans_from_strings(
    #                 getSecret(var_name, context=CREDSTASH_CONTEXT))
    #         except:
    #             pass
    # if value is None:
    #     if show_warnings:
    #         error_msg = "Set the %s environment variable" % var_name
    #         print error_msg
    # 
    #     if os.environ.get("SUPPRESS_ERROR_ON_MISSING_ENV"):
    #         return ''
    #     raise ImproperlyConfigured(error_msg)

    return value


def env_variable_exists(var_name):
    """Get the environment variable or return exception."""
    try:
        get_env_variable(var_name, show_warnings=False)
        return True
    except:
        return False


def retry(func, times, default=None):
    if times == 0:
        if default:
            return default
        raise Exception('{0} failed too many times'.format(func))
    try:
        return func()
    except:
        times = times - 1
        return retry(func, times, default=default)
