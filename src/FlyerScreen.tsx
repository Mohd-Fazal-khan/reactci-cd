import { Share, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

const FlyerScreen = () => {
  const route = useRoute()
  const incomingParams = route.params

  const [modalVisible, setModalVisible] = useState(false)
  const [flyerId, setFlyerId] = useState(null)
  const [productId, setProductId] = useState(null)

  // Open modal if app opened from deep link
  useEffect(() => {
    if (incomingParams?.flyerId && incomingParams?.productId) {
      setFlyerId(incomingParams.flyerId)
      setProductId(incomingParams.productId)
      setModalVisible(true)
    }
  }, [incomingParams])

  const shareFlyer = async () => {
    // Generate new IDs
    const newFlyerId = Math.floor(Math.random() * 1000)
    const newProductId = Math.floor(Math.random() * 10000)

    const link = `https://demolinks-ten.vercel.app/flyer/${newFlyerId}/${newProductId}`

    try {
      await Share.share({
        message: `Check this flyer: ${link}`,
      })
    } catch (error) {
      console.log('Error sharing flyer:', error)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={shareFlyer}>
        <Text style={styles.buttonText}>Share Flyer</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Flyer ID: {flyerId}</Text>
            <Text style={styles.modalText}>Product ID: {productId}</Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'red', marginTop: 20 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default FlyerScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  button: { backgroundColor: 'blue', padding: 12, borderRadius: 6 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 8, width: '80%', alignItems: 'center' },
  modalText: { fontSize: 16, marginBottom: 10 },
})
