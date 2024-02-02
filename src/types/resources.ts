export enum RESOURCES {
  ORDER = 'order',
  PRIORITY = 'priority',
  REPORT = 'report',
  USER = 'user',
  DEPARTMENT = 'department',
  CERTIFICATE = 'certificate',
  MODALITY_ROOM = 'modalityRoom',
  MODALITY = 'modality',
  MODALITY_TYPE = 'modalityType',
  MODALITY_TYPE_BY_NAME = 'modalityTypeByName',
  MODALITY_GROUP = 'modalityGroup',
  MODALITY_TYPE_NAME = 'modalityTypeName',
  PROCEDURE = 'procedure',
  PROCEDURE_GROUP = 'procedureGroup',
  BODY_PART = 'bodyPart',
  CONTENT_GROUP = 'contentGroup',
  CONTENT = 'content',
  REQUEST = 'request',
  STUDY = 'study',
  PATIENT = 'patient',
  LOCK = 'lock',
  LAYOUT = 'layout',
  USER_GROUP = 'group',
  ROLE = 'role',
  ROLE_NAME = 'roleName',
  MODULE = 'module',
  STATISTICAL_REPORT = 'statisticalReport',
  USER_TYPE = 'userType',
  CURRENT_TIME = 'currentTime',
  VIEWER_URL = 'viewerUrl',
  NON_DICOM = 'nonDicom',
  ORDER_FILE = 'file',
  PDF = 'pdf',
  ORDER_STUDY = 'orderStudy',
  ANALYTIC = 'analytics',
  ORDER_HISTORY = 'orderHistory',
  REPORT_STATUS_COUNT = 'reportStatusCount',
  BOOKMARK = 'bookmark',
  BOOKMARK_FOLDER = 'folder',
  SHIFT_WORK = 'shiftWork',
  STATISTICS_REPORT = 'statisticsReport',
  STORE = 'store',
  REMOTE_STORE = 'remoteStore',
  FILE_STORE = 'fileStore',
  USER_ACTIVITY = 'userActivity',
  USER_ACTIVITY_TYPE = 'userActivityType',
  EVENT_LOG = 'eventLog',
  CONFIG = 'config',
  CONFIG_ATTRIBUTE = 'configAttribute',
  DISPLAY_CONFIG = 'displayConfig',
  APPLICATION = 'application',
  APPLICATION_TYPE = 'applicationType',
  WORKSTATION = 'workstation',
  JITSI = 'jitsi',
  ORDER_STATUS = 'orderStatus',
  EVENT_LOG_SOURCE = 'eventLogSource',
  DOMAIN = 'domain',
  EXTENSION = 'extension',
  TIMETABLE = 'timetable',
  TIMETABLE_PERIOD = 'timetablePeriod',
  MODALITY_TYPE_ATTRIBUTE = 'modalityTypeAttribute',
  CONSUMABLE = 'consumable',
  CONSUMABLE_MATERIAL = 'consumableMaterial',
  MODULE_EXTENSION = 'moduleExtension',
  APPROVAL_CONFLICT = 'approvalConflict',
  IS_VALID_APPROVAL = 'isValidApproval',
  COUNT_REQUEST_BY_MODALITY = `${RESOURCES.ANALYTIC}/today/countRequestsByModality`,
  PATIENT_REQUEST = 'patientRequest',
  SHORTCUT_KEY = 'shortcutKey',
  SETTING = 'setting',
}

export enum KIOSK_RESOURCES {
  KIOSK_SITE = 'site',
  KIOSK_APPROVED_DIAGNOSIS = 'approved-diagnosis',
  KIOSK_MWL = 'mwl',
  KIOSK_TICKET = 'ticket',
  KIOSK_SOUND = 'sound',
  KIOSK_TICKET_SUMMARY = 'ticket-summary',
  KIOSK_MODALITY = 'modality',
  KIOSK_MODALITY_TYPE = 'modalityType',
  SUGGEST_MODALITY = 'suggest-modality',
}

export enum QMS_RESOURCES {
  QMS_SITE = 'site',
  QMS_APPROVED_DIAGNOSIS = 'approved-diagnosis',
  QMS_MWL = 'mwl',
  QMS_TICKET = 'ticket',
  QMS_SOUND = 'sound',
  QMS_TICKET_SUMMARY = 'ticket-summary',
  SUGGEST_MODALITY = 'suggest-modality',
  QMS_MODALITY = 'modality',
  QMS_MODALITY_TYPE = 'modalityType',
  PROCEDURE = 'procedure',
}
