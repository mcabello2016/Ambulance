{
    "resourceType": "Observation",

    "status": "final",

    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "85354-9",
                "display": "Bood pressure panel with all children optional"
      }
    ],
        "text": "Blood pressure systolic & diastolic"
    },
    "subject": {
        "reference": "Patient/example"
    },
    "effectiveDateTime": "2012-09-17",

    "bodySite": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "368209003",
                "display": "Right arm"
      }
    ]
    },
    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8480-6",
                        "display": "Systolic blood pressure"
          }
        ]
            },
            "valueQuantity": {
                "value": 107,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org",
                "code": "mm[Hg]"
            }
    },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8462-4",
                        "display": "Diastolic blood pressure"
          }
        ]
            },
            "valueQuantity": {
                "value": 60,
                "unit": "mmHg",
                "system": "http://unitsofmeasure.org",
                "code": "mm[Hg]"
            }
    }
  ]
}
