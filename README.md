# Penn Presbyterian Medical Center Dashboard

## Overview
This dashboard provides real-time information for patients and staff at Penn Presbyterian Medical Center's Emergency Department. It displays critical metrics, resource availability, and wellness resources to improve the patient experience during emergency department visits.

## Purpose
The dashboard serves multiple purposes:

1. **Patient Information**: Provides transparency about wait times, department status, and available resources
2. **Staff Coordination**: Displays staff availability and resource utilization for better coordination
3. **Wellness Support**: Offers wellness tips, amenities information, and stress-reduction techniques for patients in the waiting area
4. **Feedback Collection**: Enables patients to provide real-time feedback about their experience

## Features

### Key Metrics Display
- Patient admissions statistics
- Available beds tracking
- Emergency cases monitoring
- Staff on duty counts

### Wellness Tips Carousel
- Rotating wellness advice including:
  - Stress relief techniques
  - Hydration reminders
  - Mindfulness practices
  - Stretching suggestions
  - Digital detox recommendations

### Performance Metrics
- Wait time tracking by ESI (Emergency Severity Index) level
- Length of stay metrics
- Bed occupancy rates
- Nurse-to-patient ratios

### Resource Utilization
- Real-time status of critical resources:
  - ICU beds
  - Ventilators
  - CT scanners
  - Treatment rooms
  - Emergency vehicles

### Wellness Corner Integration
- Information about available amenities:
  - Beverage stations
  - Reading materials
  - Charging stations
  - Wi-Fi access

### Patient Feedback System
- QR code for direct feedback submission
- Links to patient information resources

## Technical Implementation
The dashboard is built using:
- React.js for the frontend framework
- Chakra UI for component styling
- React Icons for visual elements
- Chart.js (via LineChart component) for data visualization

## Usage
The dashboard is designed to be displayed on monitors throughout the emergency department waiting area. It automatically refreshes data and rotates wellness tips to provide current information to patients and staff.

## Feedback Integration
Patients can scan the QR code or click the "Submit Feedback" button to access a Google Form where they can provide feedback about their experience. This feedback is used to continuously improve the emergency department services.

## Author
Ansh Tandon  
BE 5130: Human-centered Design in Clinical Emergency Medicine  
University of Pennsylvania

## Future Enhancements
- Real-time API integration with hospital systems
- Personalized wait time estimates
- Multi-language support
- Accessibility improvements for patients with disabilities
